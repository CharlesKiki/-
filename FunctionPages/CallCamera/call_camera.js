	<script>
		function main()
		{	
	    var IntentMana = plus.android.importClass('android.content.Intent');
	    var MediaStore = plus.android.importClass('android.provider.MediaStore');
	    var App        = plus.android.runtimeMainActivity();
	    var Uri        = plus.android.importClass('android.net.Uri');
	    var FILE       = plus.android.importClass('java.io.File');
	    var intent  = new IntentMana(MediaStore.ACTION_IMAGE_CAPTURE);
	
	    var vfile    = new FILE("/storage/emulated/0/my/test/img.jpg");
	
	    if(!vfile.exists())
	    {
	        var vDirPath = vfile.getParentFile(); //new File(vFile.getParent());
	        vDirPath.mkdirs();
	    }
	    else{
	        alert("文件存在!");
	    }
	
	    var uri = Uri.fromFile(vfile);
	    //
	    intent.putExtra(MediaStore.EXTRA_OUTPUT, uri);//
	    App.startActivityForResult(intent,100);
	
		}
	</script>