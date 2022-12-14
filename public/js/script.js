// ketika dokumen siap jalankan fungsinya
$(function() {

    $('.tombolTambahData').on('click', function() {
        $('#forModalLabel').html('Tambah data mahasiswa');
        // pake css selector
        $('.modal-footer button[type=submit]').html('Tambah Data');
        
        $('.modal-body form').attr('action','http://localhost/phpdasar/wpuMvc/public/mahasiswa/tambah');

        $('#nama').val('');
        $('#nrp').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');
    });
    
    //buat event ketika tombol edit di klik
    // jQuery tolong carikan kelas ...
    $('.tampilModalUbah').on('click', function() {
        //jquery cariin saya elemen yang id ...
        $('#forModalLabel').html('Ubah data mahasiswa');
        // pake css selector
        $('.modal-footer button[type=submit]').html('Ubah Data');
        
        $('.modal-body form').attr('action','http://localhost/phpdasar/wpuMvc/public/mahasiswa/ubah');


        const id = $(this).data('id');
        // console.log(id); contoh manggil
        $.ajax({
            url: 'http://localhost/phpdasar/wpuMvc/public/mahasiswa/getubah',
            // data: {<id berisi id const> : <isi data>} 
            data: {id : id},
            method: 'post',
            dataType: 'json', 
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            } 
        });
    }); 
});