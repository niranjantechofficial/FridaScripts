Java.perform ( function() 
   {  	
	   var Installer= Java.use("android.app.ApplicationPackageManager");
       Installer.getInstallerPackageName.overload('java.lang.String').implementation = function (Str)
	    {    console.error("Installer Name Fixed");
	         Java.perform(function() {
             var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
             console.error("#######################\n", jAndroidLog.getStackTraceString( jException.$new() ),"#######################\n");
          }); 
	         return "com.android.vending";	         
	    }
	  
      var system = Java.use("java.lang.System");
      system.exit.overload("int").implementation = function(var0)
       {   
	        console.warn("[*] Exit Called");
	        Java.perform(function() {
             var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
            console.warn("#######################\n", jAndroidLog.getStackTraceString( jException.$new() ),"#######################\n");
            });
         }
   
 Java.choose("android.app.Activity",{
      onMatch : function(instance) 
      {
       instance.onDestroy.overload().implementation = function() {
	   console.log("[*] onDestroy() Called");  }
	  },
	  onComplete :function(retval)
	  {  }});
    
	var act = Java.use("android.app.Activity");
    act.finish.overload().implementation = function() {
	    console.log("[*] Finish() Called");
	        Java.perform(function() {
             var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
             console.log("#######################\n", jAndroidLog.getStackTraceString( jException.$new() ),"#######################\n");
              });
           }
   
    
   var act = Java.use("android.os.Process");
   act.myPid.overload().implementation = function() {
	   console.log("[*] Mypid() = ",this.myPid());   
	   return this.myPid();
      } 

  var ss = Java.use("android.app.Service");
   ss.stopSelf.overload().implementation = function() {
	   console.log("[*] stopSelf() called ");
	   
   }
    
        

   var Verify = Java.use("java.security.Signature");
   Verify.verify.overload("[B").implementation = function() {
	   console.warn("[*] Core Verify() called ");
	   
	   Java.perform(function() {
          var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
          console.warn("#######################\n", jAndroidLog.getStackTraceString( jException.$new() ),"#######################\n");
          }); 
	   return true;
       } 
      var MD = Java.use("java.security.MessageDigest");
      MD.isEqual.overload("[B", "[B").implementation = function() {
	   console.log("[*] MD isEqual() called ");
	   return true;
       } 
 
   var Pm = Java.use("android.content.pm.PackageManager");
   Pm.getPackageInfo.overload("java.lang.String","int").implementation = function(pkg, flag) {
	   console.warn("getPackageInfo() with package",pkg," and flag ", flag);
	   return this.getPackageInfo.overload("java.lang.String","int").call(this,pkg,flag);
   }


	var act = Java.use("android.app.Activity");
   act.finishActivity.overload('int').implementation = function(arg) {
	   console.log("FinishActivity():-->>"+arg);
	   console.log("[*] FinishActivity() Called");
   }
   
   
	var Proc = Java.use("android.os.Process");
   Proc.killProcess.overload('int').implementation = function(arg) {
      
	   console.error("KillProcess():-->>"+arg);
	   console.error("[*] KillProcess() Called");
	   
	   Java.perform(function() {
          var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
          console.error("#######################\n", jAndroidLog.getStackTraceString( jException.$new() ),"#######################\n");
             }); 
	   
	   
   }
   
   
	var AR = Java.use("android.app.Activity");
   AR.onActivityResult.overload('int', 'int', 'android.content.Intent').implementation = function(a,b,c) {
	   console.log("onActivityResult():-->>"+a+ " " +b+" " +c);
	   console.log("[*] onActivityResult() Called");
   }

   var FinishAffinity = Java.use("android.app.Activity");
  FinishAffinity.finishAffinity.overload().implementation = function() {
	   
	   console.log("[*] finishAffinity() Called");
   }
   
  var FinishAndRemoveTask= Java.use("android.app.Activity");
  FinishAndRemoveTask.finishAndRemoveTask.overload().implementation = function() {
	   
	   console.log("[*] FinishAndRemoveTask() Called");
   }
         
  var StartActivity= Java.use("android.app.Activity");
  StartActivity.startActivity.overload("android.content.Intent").implementation = function(intent) {
	   
	   console.warn("[*] startActivity() Called with " + intent);
	   Java.perform(function() {
          var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
          console.warn("#######################\n", jAndroidLog.getStackTraceString( jException.$new() ),"#######################\n");
          }); 
	   return this.startActivity(intent);
	   
	 }
   
  var ifinish= Java.use("android.app.Activity");
  ifinish.isFinishing.overload().implementation = function() 
  {
	   var ret = this.isFinishing();
	   console.log("[*] isFinishing() Called");
	    return this.isFinishing();
	 } 	
		
			
	}
	
  )
  

 Interceptor.attach(Module.findExportByName(null, "exit"), {
        onEnter: function(args) 
        {        
           console.warn("Native Exit() Called :-->:\n" +Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n") + "\n");
           },
        onLeave: function(retval) { }
    });
    
    Interceptor.attach(Module.findExportByName(null, "abort"), {
        onEnter: function(args) 
        {
          console.warn("Native Abort() Called :-->:\n" +Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n") + "\n");
        },
        onLeave: function(retval) { }
    });    
        ######HOW I DID THIS😂
