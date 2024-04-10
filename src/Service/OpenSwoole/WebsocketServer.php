<?php

namespace App\Service\OpenSwoole;

use App\Service\OpenSwoole\Factory\TableFactory;
use OpenSwoole\Constant;
use OpenSwoole\Http\Request;
use OpenSwoole\WebSocket\Frame;
use OpenSwoole\WebSocket\Server;
use OpenSwoole\Table;

class WebsocketServer
{
    private $server;
    private $fds;

    public function __construct(int $port, TableFactory $fds)
    {
        $this->server = new Server(
            "0.0.0.0",
            $port,
            Server::SIMPLE_MODE,
            Constant::SOCK_TCP || Constant::SSL
        );
        $this->fds = $fds->createTable();
    }

    public function start()
    {
        $this->server->set([
            'ssl_cert_file' => 'docker/caddy/certs/localhost+2.pem',
            'ssl_key_file' => 'docker/caddy/certs/localhost+2-key.pem'
        ]);


        $this->server->on("Start", function (Server $server) {
            echo "OpenSwoole Websocket server is started at " . $server->host . ":" . $server->port . "\n";
        });

        $this->server->on('Open', function (Server $server, Request $request) {
            $fd = $request->fd;
            $clientName = sprintf("Client-%'.06d", $request->fd);
            $this->fds->set($request->fd, [
                'fd' => $fd,
                'name' => sprintf($clientName)
            ]);
            echo "Connection <{$fd}> open by {$clientName}. Total connections: " . $this->fds->count() . "\n";
            foreach ($this->fds as $key => $value) {
                if ($key == $fd) {
                    $server->push($request->fd, "Welcome {$clientName}, there are " . $this->fds->count() . " connections");
                } else {
                    $server->push($key, "A new client ({$clientName}) is joining to the party");
                }
            }
        });

        $this->server->on('Message', function (Server $server, Frame $frame) {
            $sender = $this->fds->get(strval($frame->fd), "name");
            echo "Received from " . $sender . ", message: {$frame->data}" . PHP_EOL;
            foreach ($this->fds as $key => $value) {
                if ($key == $frame->fd) {
                    $server->push($frame->fd, "Message sent");
                } else {
                    $server->push($key, "FROM: {$sender} - MESSAGE: " . $frame->data);
                }
            }
        });

        $this->server->on('Close', function (Server $server, int $fd) {
            $this->fds->del($fd);
            echo "Connection close: {$fd}, total connections: " . $this->fds->count() . "\n";
        });

        $this->server->on('Disconnect', function (Server $server, int $fd) {
            $this->fds->del($fd);
            echo "Disconnect: {$fd}, total connections: " . $this->fds->count() . "\n";
        });

        $this->server->start();
    }

    public function stop()
    {
        $this->server->shutdown();
    }
}
