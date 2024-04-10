<?php

namespace App\Service\OpenSwoole\Factory;

use OpenSwoole\Table;

class TableFactory
{
    private int $size = 1024;

    public function createTable(): Table
    {
        $table = new Table($this->size);
        $table->column('fd', Table::TYPE_INT, 4);
        $table->column('name', Table::TYPE_STRING, 16);
        $table->create();
        return $table;
    }
}
