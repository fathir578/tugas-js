<h2>Tambah Siswa</h2>

<form action="/siswa" method="POST">
    @csrf
    <input type="text" name="nama" placeholder="Nama">
    <input type="text" name="kelas" placeholder="Kelas">
    <button type="submit">Simpan</button>
</form>
