import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  studentsList:Student[]=[];
  editMode=false;
  id:string="";
  first_name:string="";
  last_name:string="";
  email:string="";
  mobile:string="";
  studentObj:Student={
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };
  updatedObj!:Student;

  constructor(private auth:AuthService,private data:DataService){}

  ngOnInit(){
    this.getAllStudents();
  }
  
  logout(){
    this.auth.logout();
  }

  getAllStudents(){
    this.data.getAllStudents().subscribe(res=>{
      this.studentsList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    },err=>{
      alert("Error While Fetching Student Data!!")
    })
  }

  addStudent(){
    if(this.first_name!="" && this.last_name!="" && this.mobile!="" && this.email!=""){

      this.studentObj.id="";
      this.studentObj.email=this.email;
      this.studentObj.first_name=this.first_name;
      this.studentObj.last_name = this.last_name;
      this.studentObj.mobile = this.mobile;

      this.data.addStudent(this.studentObj);
      this.resetForm();

    }else{
      alert("Please Fill All The Details")
    }
  }

  resetForm(){
    this.id="";
    this.first_name="";
    this.last_name="";
    this.mobile="";
    this.email="";
  }

  updateStudent(student:Student){
    this.editMode=true;
    if(this.editMode==true){
      console.log("Now you can Edit",student)
      this.studentObj = student;
    }
  }

  saveStudent(stud:Student){
    console.log("Saving the data",stud);
    this.data.updateStudent(stud);
  }



  deleteStudent(student:Student){
    if(window.confirm('Are you Sure you want to Delete '+student.first_name+"?")){
      this.data.deleteStudent(student);
    }
    
  }

  onfirstNameKey(event:any){
    const FirstNameValue = event.target.value;
    this.studentObj.first_name=FirstNameValue;
    console.log(this.studentObj.first_name);
  }

  onlastNameKey(event:any){
    const LastNameValue = event.target.value;
    this.studentObj.last_name=LastNameValue;
    console.log(this.studentObj.last_name);
  }

  onMobileKey(event:any){
    const mobileVal = event.target.value;
    this.studentObj.mobile=mobileVal;
    console.log(this.studentObj.mobile);
  }

  onemailKey(event:any){
    const emailVal = event.target.value;
    this.studentObj.email=emailVal;
    console.log(this.studentObj.email);
  }
}
