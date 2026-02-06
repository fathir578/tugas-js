<h2>Data Siswa</h2>
<a href="/siswa/create">Tambah</a>

<table border="1">
    <tr>
        <th>Nama</th>
        <th>Kelas</th>
        <th>Aksi</th>
    </tr>

    @foreach ($siswas as $siswa)
    <tr>
        <td>{{ $siswa->nama }}</td>
        <td>{{ $siswa->kelas }}</td>
        <td>
            <a href="/siswa/{{ $siswa->id }}/edit">Edit</a>

            <form action="/siswa/{{ $siswa->id }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Hapus</button>
            </form>
        </td>
    </tr>
    @endforeach
</table>
