<?php

namespace App\Service\Provider;

class MenuService
{
    public function getMenu(): array
    {
        return [
            ['name' => 'Home', 'path' => 'app_home'],
            ['name' => 'Chat', 'path' => 'app_chat'],
            ['name' => 'Users', 'path' => 'app_admin_user_index'],
    ];
    }
}
