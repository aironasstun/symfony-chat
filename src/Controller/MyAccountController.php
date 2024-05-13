<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MyAccountController extends AbstractController
{
    #[Route('/my_account', name: 'app_my_account')]
    public function index(
        Request $request,
        EntityManagerInterface $entityManager,
        Security $security,
    ): Response {

        $currentUser = $security->getUser();

        $defaults = [
            'chatUsername' => $currentUser?->getChatUsername(),
        ];

        $form = $this->createFormBuilder($defaults)
            ->add('chatUsername', TextType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $username = $data['chatUsername'];
            if (null !== $currentUser) {
                $currentUser->setChatUsername($username);
                $entityManager->persist($currentUser);
                $entityManager->flush();
            }

            return $this->redirectToRoute('app_home');
        }

        return $this->render('my_account/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
