<?php

namespace App\Command;

use App\Service\OpenSwoole\WebsocketServer;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

#[AsCommand(name:'openswoole:websocket:stop')]
class StopWebsocketServer extends Command
{
    public function __construct(
        #[Autowire('@app.openswoole.server')]
        private WebsocketServer $websocketServer
    )
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->websocketServer->stop();
        $output->writeln('OpenSwoole Websocket server has been stopped');

        return Command::SUCCESS;
    }
}
