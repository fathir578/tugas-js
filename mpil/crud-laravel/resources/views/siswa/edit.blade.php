<h2>Edit Siswa</h2>

<form action="/siswa/{{ $siswa->id }}" method="POST">
    @csrf
    @method('PUT')

    <input type="text" name="nama" value="{{ $siswa->nama }}">
    <input type="text" name="kelas" value="{{ $siswa->kelas }}">
    <button type="submit">Update</button>
</form>
