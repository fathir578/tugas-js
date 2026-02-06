<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    public function index()
    {
        $siswas = Siswa::all();
        return view('siswa.index', compact('siswas'));
    }

    public function create()
    {
        return view('siswa.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'kelas' => 'required',
        ]);

        Siswa::create([
            'nama' => $request->nama,
            'kelas' => $request->kelas,
        ]);

        return redirect('/siswa');
    }

    public function edit($id)
    {
        $siswa = Siswa::findOrFail($id);
        return view('siswa.edit', compact('siswa'));
    }

    public function update(Request $request, $id)
    {
        $siswa = Siswa::findOrFail($id);

        $siswa->update([
            'nama' => $request->nama,
            'kelas' => $request->kelas,
        ]);

        return redirect('/siswa');
    }

    public function destroy($id)
    {
        Siswa::destroy($id);
        return redirect('/siswa');
    }
}
