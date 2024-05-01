<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQueriesRequest;
use App\Http\Resources\QueriesResource;
use Illuminate\Foundation\Application;
use App\Models\Queries;
use Illuminate\Http\Response;
use Inertia\Inertia;

class QueriesController extends Controller
{

    public function index()
    {
        $query = Queries::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        
        $queries = $query->orderBy($sortField, $sortDirection)->paginate(10);

        return Inertia::render('Homepage', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'queries' => QueriesResource::collection($queries),
        ]);
    }


    public function store(StoreQueriesRequest $request)
    {

        $data = $request->all();

    

        $data['location'] = json_encode($data['location']);
        $data['current'] = json_encode($data['current']);
        
    
    try {        
        Queries::create($data);


        $query = Queries::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
    
        $queries = $query->orderBy($sortField, $sortDirection)->paginate(10);








       return Inertia::render('Homepage', [
        'message' => 'consulta salva',
        'status' => 200,
        'queries' => $queries

       ]);
    } catch (\Exception $e) {
        return Inertia::render('Homepage', [
            'message' => 'erro ao criar consulta',
            'status' => 400,
            'erro' => $e
        ]);
    }
    }

    
}
