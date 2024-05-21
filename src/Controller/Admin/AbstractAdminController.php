<?php

namespace App\Controller\Admin;

use App\Service\Provider\MenuService;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

abstract class AbstractAdminController extends AbstractController
{
    public static function getSubscribedServices(): array
    {
        return array_merge(parent::getSubscribedServices(), [
            MenuService::class => '?' . MenuService::class,
        ]);
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function renderWithMenu(string $template, array $parameters = []): Response
    {
        return $this->render(
            $template,
            array_merge(
                $parameters,
                ['menuItems' => $this->container->get(MenuService::class)->getMenu()]
            ));
    }
}
