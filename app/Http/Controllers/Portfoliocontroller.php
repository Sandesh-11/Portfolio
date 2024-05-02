<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Portfoliocontroller extends Controller
{
    public function start()
    {
        return view('Portfolio.home');
        
    }
    public function about()
    {
        return view('Portfolio.about');
    }
}
