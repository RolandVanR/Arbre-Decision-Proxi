<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DecController extends AbstractController
{
//    /**
//     * @Route("/arbre", name="homepage")
//     */
    #[Route("/arbre", name: "homepage")]
    public function index(): Response
    {
        
        return $this->render('dec/index.html');
    }
}