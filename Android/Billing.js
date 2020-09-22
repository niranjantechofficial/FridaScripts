
Java.perform ( function() 
   {  
      var Redirect = Java.use("android.content.Intent");	
      Redirect.setPackage.overload('java.lang.String').implementation = function (pkg)
	  {    
	     if(pkg=='com.android.vending')
		  { 
		    var pkgFix= "com.android.vendinf";
		    console.log("setPackage Fixed");		
	        return this.setPackage.call(this,pkgFix);	        
		  }
		  else
		 { 
     		 return this.setPackage.call(this,pkg);
		  } 
			
	  }	
	  try{
	  var EV= Java.use("com.android.org.conscrypt.OpenSSLSignature");
	  EV.engineVerify.overload('[B').implementation = function (signatures)
	  {     console.warn("engineVerify From Conscrypt Fixed");
	        return true;
	   } }
	  catch(e){}
	  try{
	  var EV= Java.use("org.apache.harmony.xnet.provider.jsse.OpenSSLSignature");
	  EV.engineVerify.overload('[B').implementation = function (signatures)
	  {     console.warn("engineVerify From Harmoney.xnet Fixed");
	        return true;
	   } }
	   catch(e){}
	  
	  var  VerifySign= Java.use("java.security.Signature");
      VerifySign.verify.overload('[B').implementation = function (paramBool)
	   {    console.warn("Verify From java.security.Signature Fixed");	       
	        return true;	 
	   }
	  
	   

 }  
)
	
