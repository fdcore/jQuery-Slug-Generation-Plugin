test( "Slug test", function() {

    $("#title").slug({slug: '#url_title', separator: "-"});

    $("#title").val('english text 1 2 3 -=$#').trigger('keyup');

    ok( $('#url_title').val() == "english-text-1-2-3-", "English OK" );

    $("#title").val('русский текст').trigger('keyup');

    ok( $('#url_title').val() == "russkij-tekst", "Russian OK" );

    $("#title").val('Ελληνικό κείμενο').trigger('keyup');

    ok( $('#url_title').val() == "ellhniko-keimeno", "Greek OK" );

    $("#title").val('türkçe metin').trigger('keyup');

    ok( $('#url_title').val() == "turkce-metin", "Turkish OK" );

});