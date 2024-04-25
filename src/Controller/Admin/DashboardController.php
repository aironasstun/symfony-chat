<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(): Response
    {
        return $this->render('admin/dashboard/index.html.twig', [
            'menuItems' => [
                ['name' => 'Home', 'path' => 'app_home'],
                ['name' => 'Chat', 'path' => 'app_chat'],
                ['name' => 'Dashboard', 'path' => 'app_dashboard'],
            ],
            'content' => 'AMAZING CONTENT',
        ]);
    }
}
