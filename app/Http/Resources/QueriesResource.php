<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QueriesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $location = json_decode($this->location, true);
        $current = json_decode($this->current, true);


        return [
            'id' => $this->id,
            'cep' => $this->cep,
            'cidade' => $this->cidade,
            'location' => $location,
            'current' => $current,
            'created_at' => $this->created_at
        ];
    }
}
