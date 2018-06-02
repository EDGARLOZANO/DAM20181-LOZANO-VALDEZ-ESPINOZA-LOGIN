import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';


import firebase from 'firebase';
import { AuthProvider } from '@firebase/auth-types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logea=false;
  activar=true;
  bandera=true;
  email="";
  pass="";
  provider={
    
    name: '',
    foto:'',
    email:''
  
  }

  constructor(public navCtrl: NavController,public auth:AngularFireAuth) {

  }
  loginFace(){
     this.logea=true;
     
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
      
      this.provider.name= res.user.displayName;
      this.provider.email= res.user.email;
      this.provider.foto= res.user.photoURL;
      console.log(res);
      
    })
    
  }
  
 
  loginGoogle(){
    this.logea=true;
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res =>{
      
      this.provider.name= res.user.displayName;
      this.provider.email= res.user.email;
      this.provider.foto= res.user.photoURL;
      console.log(res);
      
    
    })
  }
  loginTwitter(){
    this.logea=true;
    this.auth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(res =>{
      
      this.provider.name= res.user.displayName;
      this.provider.email= res.user.email;
      this.provider.foto= res.user.photoURL;
      console.log(res);
      
    })
  }
  loginUS(){
    this.logea=true;
    
    this.auth.auth.signInWithEmailAndPassword(this.email, this.pass).then(res=> {
      this.provider.name= res.user.displayName;
      this.provider.email= res.user.email;
      this.provider.foto= res.user.photoURL;
      console.log(res);
    })
  }

  logout(){
    this.logea=false;
    this.auth.auth.signOut();
    this.provider.name= "";
      this.provider.email= "";
      this.provider.foto="";
   
  }
  

}
