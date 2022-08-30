<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoteRequest;
use Illuminate\Http\Request;
use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{

    public function index()
    {
        if (Auth::check()) {
            $notes = Auth::user()->notes->all();
        } else {
            $notes = null;
        }

        return Inertia::render('Notes', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'isLoggedIn' => auth()->check(),
            'notes' => $notes,
        ]);
    }
    public function create(NoteRequest $request)
    {
        $note = $request->user()->notes()->create($request->validated());

        return Inertia::render('Notes', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'isLoggedIn' => auth()->check(),
            'notes' => $request->user()->notes()->get()
        ]);
    }

    public function update(Note $note, NoteRequest $request) {
        $note = $request->user()->notes()->findOrFail($note -> id);
        $note->update($request->validated());
        // return Inertia::render('Notes', [
        //     'notes' => $request->user()->notes()->get()
        // ]);
        return Redirect::back()->with('success', 'Note updated.');
    }
}
