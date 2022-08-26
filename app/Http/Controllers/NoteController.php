<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoteRequest;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function create(NoteRequest $request) {
        $note = $request->user()->notes()->create($request->validated());

        return Inertia::render('Notes', [
            'notes' => $request->user()->notes()->get()
        ]);
    }
}
