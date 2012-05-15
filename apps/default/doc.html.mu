<html>
  <head>
    <title>doc {{docName}}</title>
  </head>

  <body>
    <textarea id="editor" style="width: 100%;height: 100%"></textarea>
    <script src="/channel/bcsocket.js"></script>
    <script src="/share/share.uncompressed.js"></script>
    <script src="/share/textarea.js"></script>
    <script>
    window.onload = function() {

    var connection = new sharejs.Connection('/channel');

    connection.open('{{{docName}}}', function(error, doc) {
        if (error) {
          console.error(error);
          return;
        }
        var editor = document.getElementById('editor');
            editor.value = doc.snapshot;

        doc.attach_textarea(editor);

      });
    };
    </script>
  </body>
</html>  
