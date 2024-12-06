import{$ as ye,B as c,C as u,D as g,F as ce,G as ie,H as oe,I as ue,J as M,K as L,L as ge,M as be,N as fe,S as P,T as A,U,V as N,W as O,X as F,Y as q,Z as W,_ as T,a as D,b as le,c as me,ca as he,d as de,e as b,f,ga as re,ha as w,i as l,ia as j,j as C,ja as z,k as v,ka as H,l as se,la as G,m as S,ma as x,n as _,o as pe,q as e,r as t,s as I,t as E,u as y,v as h,x as n,y as m,z as ne}from"./chunk-AQROOWK6.js";var Z=class s{constructor(r){this.router=r}ngOnInit(){this.router.events.pipe(le(r=>r instanceof ye)).subscribe(()=>{let r=this.router.routerState.snapshot.root.fragment;if(r){let i=document.getElementById(r);i&&i.scrollIntoView({behavior:"smooth"})}})}static \u0275fac=function(i){return new(i||s)(C(he))};static \u0275cmp=v({type:s,selectors:[["app-admin-dashboard"]],decls:14,vars:0,consts:[[1,"container","mt-2"],["id","home",1,"row","home","mb-2"],[1,"col-12","text-center"],["id","menu",1,"row","menu","mb-2"],["id","service",1,"row","service","mb-2"],["id","about",1,"row","about","mb-2"]],template:function(i,o){i&1&&(e(0,"body")(1,"div",0)(2,"div",1)(3,"div",2),I(4,"app-home"),t()(),e(5,"div",3)(6,"div",2),I(7,"app-menu"),t()(),e(8,"div",4)(9,"div",2),I(10,"app-service"),t()(),e(11,"div",5)(12,"div",2),I(13,"app-about"),t()()()())},dependencies:[j,z,H,G],styles:["body[_ngcontent-%COMP%]{background:#636161}.home[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%], .service[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]{box-shadow:0 10px 10px #000}"]})};function _e(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td"),n(16),t(),e(17,"td"),n(18),t(),e(19,"td"),n(20),t(),e(21,"td")(22,"button",29),y("click",function(){let d=b(i).$implicit,a=h();return f(a.openEmployeeModal(d))}),n(23,"Edit"),t(),e(24,"button",30),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteEmployee(d.id))}),n(25,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.name),l(2),m(i.email),l(2),m(i.phone),l(2),m(i.position),l(2),m(i.permissions),l(2),m(i.salary),l(2),m(i.totalsalary),l(2),m(i.createdTime),l(2),m(i.updateTime)}}var J=class s{constructor(r){this.employeeService=r}employees=[];selectedEmployee={};ngOnInit(){this.loadEmployees()}loadEmployees(){this.employeeService.getEmployees().subscribe(r=>{this.employees=r},r=>{console.error("Error loading employees:",r)})}openEmployeeModal(r){this.selectedEmployee=r?D({},r):{},new bootstrap.Modal(document.getElementById("employeeModal")).show()}saveEmployee(){this.employeeService.addEmployee(this.selectedEmployee).subscribe(()=>{this.loadEmployees(),bootstrap.Modal.getInstance(document.getElementById("employeeModal")).hide()},r=>{console.error("Error adding employee:",r)})}updateEmployee(){this.employeeService.updateEmployee(this.selectedEmployee,this.selectedEmployee.id).subscribe(()=>{this.loadEmployees(),bootstrap.Modal.getInstance(document.getElementById("employeeModal")).hide()},r=>{console.error("Error updating employee:",r)})}deleteEmployee(r){confirm("Are you sure you want to delete this employee?")&&this.employeeService.deleteEmployee(r).subscribe(()=>{this.loadEmployees()},i=>{console.error("Error deleting employee:",i)})}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-add-employee"]],decls:68,vars:8,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"btn","btn-primary","mb-3",3,"click"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],["tabindex","-1","id","employeeModal",1,"modal"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","text-center"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","email",1,"form-label"],["type","email","id","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","phone",1,"form-label"],["type","text","id","phone","name","phone","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","position",1,"form-label"],["type","text","id","position","name","position","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","permissions",1,"form-label"],["type","text","id","permissions","name","permissions",1,"form-control",3,"ngModelChange","ngModel"],["for","salary",1,"form-label"],["type","number","id","salary","name","salary","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"Employee Management"),t(),e(3,"button",2),y("click",function(){return o.openEmployeeModal()}),n(4,"Add Employee"),t(),e(5,"div",3)(6,"table",4)(7,"thead",5)(8,"tr")(9,"th"),n(10,"ID"),t(),e(11,"th"),n(12,"Name"),t(),e(13,"th"),n(14,"Email"),t(),e(15,"th"),n(16,"Phone"),t(),e(17,"th"),n(18,"Position"),t(),e(19,"th"),n(20,"Permissions"),t(),e(21,"th"),n(22,"Salary"),t(),e(23,"th"),n(24,"Total"),t(),e(25,"th"),n(26,"Created Time"),t(),e(27,"th"),n(28,"Update Time"),t(),e(29,"th"),n(30,"Actions"),t()()(),e(31,"tbody"),S(32,_e,26,10,"tr",6),t()()(),e(33,"div",7)(34,"div",8)(35,"div",9)(36,"div",10)(37,"h5",11),n(38),t(),I(39,"button",12),t(),e(40,"div",13)(41,"form",14),y("ngSubmit",function(){return o.selectedEmployee.id?o.updateEmployee():o.saveEmployee()}),e(42,"div",15)(43,"label",16),n(44,"Name"),t(),e(45,"input",17),g("ngModelChange",function(a){return u(o.selectedEmployee.name,a)||(o.selectedEmployee.name=a),a}),t()(),e(46,"div",15)(47,"label",18),n(48,"Email"),t(),e(49,"input",19),g("ngModelChange",function(a){return u(o.selectedEmployee.email,a)||(o.selectedEmployee.email=a),a}),t()(),e(50,"div",15)(51,"label",20),n(52,"Phone"),t(),e(53,"input",21),g("ngModelChange",function(a){return u(o.selectedEmployee.phone,a)||(o.selectedEmployee.phone=a),a}),t()(),e(54,"div",15)(55,"label",22),n(56,"Position"),t(),e(57,"input",23),g("ngModelChange",function(a){return u(o.selectedEmployee.position,a)||(o.selectedEmployee.position=a),a}),t()(),e(58,"div",15)(59,"label",24),n(60,"Permissions"),t(),e(61,"input",25),g("ngModelChange",function(a){return u(o.selectedEmployee.permissions,a)||(o.selectedEmployee.permissions=a),a}),t()(),e(62,"div",15)(63,"label",26),n(64,"Salary"),t(),e(65,"input",27),g("ngModelChange",function(a){return u(o.selectedEmployee.salary,a)||(o.selectedEmployee.salary=a),a}),t()(),e(66,"button",28),n(67,"Save"),t()()()()()()()),i&2&&(l(32),_("ngForOf",o.employees),l(6),m(o.selectedEmployee.id?"Update Employee":"Add Employee"),l(7),c("ngModel",o.selectedEmployee.name),l(4),c("ngModel",o.selectedEmployee.email),l(4),c("ngModel",o.selectedEmployee.phone),l(4),c("ngModel",o.selectedEmployee.position),l(4),c("ngModel",o.selectedEmployee.permissions),l(4),c("ngModel",o.selectedEmployee.salary))},dependencies:[T,F,P,q,A,U,W,O,N,M],styles:[".table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:70px;height:50px;padding:6px}.modal-content[_ngcontent-%COMP%]{background:#433d3d;color:#fff}.modal-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:35px}.modal-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#433d3d;color:#fff;padding:15px}.modal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#fff;fill:#0ff}"]})};function Se(s,r){if(s&1&&(e(0,"div",29)(1,"h4",6),n(2),ie(3,"currency"),t(),e(4,"h4",6),n(5),ie(6,"currency"),t()()),s&2){let i=h();l(2),ne("Gross Salary: ",oe(3,2,i.grossSalary,"INR","symbol"),""),l(3),ne("Net Salary: ",oe(6,6,i.netSalary,"INR","symbol"),"")}}var K=class s{username="";baseSalary=0;bonus=0;hra=0;pa=0;ta=0;esi=0;deduction=0;grossSalary=null;netSalary=null;http=de(fe);onSubmit(){let r=this.baseSalary*this.hra/100,i=this.baseSalary*this.pa/100,o=this.baseSalary*this.ta/100,d=this.baseSalary*this.esi/100,a=this.deduction;this.grossSalary=this.baseSalary+r+o+d+this.bonus,this.netSalary=this.grossSalary-i-a;let p=this.netSalary;this.http.post(`http://localhost:8080/api/netsalary/${this.username}`,p,{responseType:"text"}).subscribe({next:B=>{if(B==="Calculated"){console.log("Scuccessfully Calculated"+B);return}},error:B=>{console.error(B),alert("Error"+B)}})}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=v({type:s,selectors:[["app-salarycalculation"]],decls:50,vars:9,consts:[["salaryForm","ngForm"],[1,"container","mt-2"],[1,"row","gx-5"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body"],[3,"ngSubmit"],[1,"row","mb-4"],[1,"col-12","col-md-6"],["for","username",1,"form-label"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","baseSalary",1,"form-label"],["type","number","id","baseSalary","name","baseSalary","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","bonus",1,"form-label"],["type","number","id","bonus","name","bonus","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","hra",1,"form-label"],["type","number","id","hra","name","hra","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","pa",1,"form-label"],["type","number","id","pa","name","pa","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","ta",1,"form-label"],["type","number","id","ta","name","ta","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","esi",1,"form-label"],["type","number","id","esi","name","esi","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","deduction",1,"form-label"],["type","number","id","deduction","name","deduction","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary","w-100"],["class","mt-3",4,"ngIf"],[1,"mt-3"]],template:function(i,o){if(i&1){let d=E();e(0,"body")(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3",6),n(7,"Salary Calculation"),t()(),e(8,"div",7)(9,"form",8,0),y("ngSubmit",function(){return b(d),f(o.onSubmit())}),e(11,"div",9)(12,"div",10)(13,"label",11),n(14,"Username"),t(),e(15,"input",12),g("ngModelChange",function(p){return b(d),u(o.username,p)||(o.username=p),f(p)}),t()(),e(16,"div",10)(17,"label",13),n(18,"Base Salary"),t(),e(19,"input",14),g("ngModelChange",function(p){return b(d),u(o.baseSalary,p)||(o.baseSalary=p),f(p)}),t()(),e(20,"div",10)(21,"label",15),n(22,"Bonus"),t(),e(23,"input",16),g("ngModelChange",function(p){return b(d),u(o.bonus,p)||(o.bonus=p),f(p)}),t()()(),e(24,"div",9)(25,"div",10)(26,"label",17),n(27,"HRA (%)"),t(),e(28,"input",18),g("ngModelChange",function(p){return b(d),u(o.hra,p)||(o.hra=p),f(p)}),t()(),e(29,"div",10)(30,"label",19),n(31,"PA (%)"),t(),e(32,"input",20),g("ngModelChange",function(p){return b(d),u(o.pa,p)||(o.pa=p),f(p)}),t()()(),e(33,"div",9)(34,"div",10)(35,"label",21),n(36,"TA (%)"),t(),e(37,"input",22),g("ngModelChange",function(p){return b(d),u(o.ta,p)||(o.ta=p),f(p)}),t()(),e(38,"div",10)(39,"label",23),n(40,"ESI (%)"),t(),e(41,"input",24),g("ngModelChange",function(p){return b(d),u(o.esi,p)||(o.esi=p),f(p)}),t()()(),e(42,"div",9)(43,"div",10)(44,"label",25),n(45,"Deduction"),t(),e(46,"input",26),g("ngModelChange",function(p){return b(d),u(o.deduction,p)||(o.deduction=p),f(p)}),t()()(),e(47,"button",27),n(48,"Calculate"),t()(),S(49,Se,7,10,"div",28),t()()()()()()}i&2&&(l(15),c("ngModel",o.username),l(4),c("ngModel",o.baseSalary),l(4),c("ngModel",o.bonus),l(5),c("ngModel",o.hra),l(4),c("ngModel",o.pa),l(5),c("ngModel",o.ta),l(4),c("ngModel",o.esi),l(5),c("ngModel",o.deduction),l(3),_("ngIf",o.grossSalary!=null))},dependencies:[T,F,P,q,A,U,W,O,N,L,be,ge],styles:[".container[_ngcontent-%COMP%]{max-width:600px;padding:20px}.card[_ngcontent-%COMP%]{box-shadow:0 10px 8px #000000b3}body[_ngcontent-%COMP%]{background:#00000080;margin:auto}"]})};function Ce(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td"),n(16),t(),e(17,"td"),n(18),t(),e(19,"td"),n(20),t(),e(21,"td"),n(22),t(),e(23,"td")(24,"button",33),y("click",function(){let d=b(i).$implicit,a=h();return f(a.openUpdateModal(d))}),n(25,"Update"),t(),e(26,"button",34),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteUser(d.id))}),n(27,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.name),l(2),m(i.email),l(2),m(i.username),l(2),m(i.address),l(2),m(i.phone),l(2),m(i.zipcode),l(2),m(i.status),l(2),m(i.date),l(2),m(i.password),l(2),m(i.loggintime)}}var Q=class s{constructor(r){this.userService=r}userdata=[];newUser={};ngOnInit(){this.loadUsers()}openAddUserModal(){this.newUser={},new bootstrap.Modal(document.getElementById("addUserModal")).show()}openUpdateModal(r){this.newUser=D({},r),new bootstrap.Modal(document.getElementById("addUserModal")).show()}loadUsers(){this.userService.getUsers().subscribe(r=>{this.userdata=r},r=>{console.error("Error loading users:",r),alert("Failed to load users. Please try again later.")})}addUser(){this.userService.addUser(this.newUser).subscribe(r=>{console.log(r),alert("User added successfully"),this.loadUsers()},r=>{console.error("Error adding user:",r),alert("Error adding user. Please try again later.")})}updateUser(r){this.userService.updateUser(r,this.newUser).subscribe(i=>{console.log(i),alert("User updated successfully"),this.loadUsers()},i=>{console.error("Error updating user:",i),alert("Error updating user. Please try again later.")})}deleteUser(r){confirm("Are you sure you want to delete this user?")&&this.userService.deleteUser(r).subscribe(i=>{console.log(i),alert("User deleted successfully"),this.loadUsers()},i=>{console.error("Error deleting user:",i),alert("Error deleting user. Please try again later.")})}closeModal(){new bootstrap.Modal(document.getElementById("addUserModal")).hide()}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-userlist"]],decls:78,vars:10,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"btn","btn-primary","mb-3",3,"click"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],["tabindex","-1","id","addUserModal",1,"modal"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header","justify-content-center"],["id","userModalLabel",1,"modal-title","d-flex","col-6","text-center"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","email",1,"form-label"],["type","email","id","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","username",1,"form-label"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","address",1,"form-label"],["type","text","id","address","name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","phone",1,"form-label"],["type","text","id","phone","name","phone","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","zipcode",1,"form-label"],["type","text","id","zipcode","name","zipcode","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","confirmpass",1,"form-label"],["type","password","id","confirmpass","name","loggintime","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"User Data Table"),t(),e(3,"button",2),y("click",function(){return o.openAddUserModal()}),n(4,"Add User"),t(),e(5,"div",3)(6,"table",4)(7,"thead",5)(8,"tr")(9,"th"),n(10,"ID"),t(),e(11,"th"),n(12,"Name"),t(),e(13,"th"),n(14,"Email"),t(),e(15,"th"),n(16,"Username"),t(),e(17,"th"),n(18,"Address"),t(),e(19,"th"),n(20,"Phone"),t(),e(21,"th"),n(22,"Zip Code"),t(),e(23,"th"),n(24,"Status"),t(),e(25,"th"),n(26,"Date"),t(),e(27,"th"),n(28,"Password"),t(),e(29,"th"),n(30,"Login Time"),t(),e(31,"th"),n(32,"Action"),t()()(),e(33,"tbody"),S(34,Ce,28,11,"tr",6),t()()(),e(35,"div",7)(36,"div",8)(37,"div",9)(38,"div",10)(39,"h5",11),n(40),t(),I(41,"button",12),t(),e(42,"div",13)(43,"form",14),y("ngSubmit",function(){return o.newUser.id?o.updateUser(o.newUser.id):o.addUser()}),e(44,"div",15)(45,"label",16),n(46,"Name"),t(),e(47,"input",17),g("ngModelChange",function(a){return u(o.newUser.name,a)||(o.newUser.name=a),a}),t()(),e(48,"div",15)(49,"label",18),n(50,"Email"),t(),e(51,"input",19),g("ngModelChange",function(a){return u(o.newUser.email,a)||(o.newUser.email=a),a}),t()(),e(52,"div",15)(53,"label",20),n(54,"Username"),t(),e(55,"input",21),g("ngModelChange",function(a){return u(o.newUser.username,a)||(o.newUser.username=a),a}),t()(),e(56,"div",15)(57,"label",22),n(58,"Address"),t(),e(59,"input",23),g("ngModelChange",function(a){return u(o.newUser.address,a)||(o.newUser.address=a),a}),t()(),e(60,"div",15)(61,"label",24),n(62,"Phone"),t(),e(63,"input",25),g("ngModelChange",function(a){return u(o.newUser.phone,a)||(o.newUser.phone=a),a}),t()(),e(64,"div",15)(65,"label",26),n(66,"Zip Code"),t(),e(67,"input",27),g("ngModelChange",function(a){return u(o.newUser.zipcode,a)||(o.newUser.zipcode=a),a}),t()(),e(68,"div",15)(69,"label",28),n(70,"Password"),t(),e(71,"input",29),g("ngModelChange",function(a){return u(o.newUser.password,a)||(o.newUser.password=a),a}),t()(),e(72,"div",15)(73,"label",30),n(74,"Confirm Password"),t(),e(75,"input",31),g("ngModelChange",function(a){return u(o.newUser.confirmpass,a)||(o.newUser.confirmpass=a),a}),t()(),e(76,"button",32),n(77,"Add User"),t()()()()()()()),i&2&&(l(34),_("ngForOf",o.userdata),l(6),m(o.newUser.id?"Update User":"Add New User"),l(7),c("ngModel",o.newUser.name),l(4),c("ngModel",o.newUser.email),l(4),c("ngModel",o.newUser.username),l(4),c("ngModel",o.newUser.address),l(4),c("ngModel",o.newUser.phone),l(4),c("ngModel",o.newUser.zipcode),l(4),c("ngModel",o.newUser.password),l(4),c("ngModel",o.newUser.confirmpass))},dependencies:[M,T,F,P,A,U,W,O,N],styles:[".table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:70px;height:50px;padding:6px}.modal-content[_ngcontent-%COMP%]{background:#433d3d;color:#e7e7ee}.modal-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:35px}.modal-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#433d3d;color:#fff;padding:15px}.modal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#fff;fill:#0ff}"]})};function Ee(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td")(14,"button",6),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteComplaint(d.id))}),n(15,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.name),l(2),m(i.email),l(2),m(i.message),l(2),m(i.priority),l(2),m(i.date)}}var X=class s{constructor(r){this.complaintservice=r}complaints=[];ngOnInit(){this.loadComplaint()}loadComplaint(){this.complaintservice.getComplaint().subscribe(r=>{this.complaints=r},r=>{console.error("Error loading Complaint:",r)})}deleteComplaint(r){confirm("Are you sure you want to delete?")&&this.complaintservice.deleteComplaint(r).subscribe(()=>{this.loadComplaint()},i=>{console.error("Error deleting Complaint:",i)})}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-complain"]],decls:23,vars:1,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"Complaint Box"),t(),e(3,"div",2)(4,"table",3)(5,"thead",4)(6,"tr")(7,"th"),n(8,"ID"),t(),e(9,"th"),n(10,"Name"),t(),e(11,"th"),n(12,"Email"),t(),e(13,"th"),n(14,"Message"),t(),e(15,"th"),n(16,"Priority"),t(),e(17,"th"),n(18,"Date"),t(),e(19,"th"),n(20,"Actions"),t()()(),e(21,"tbody"),S(22,Ee,16,6,"tr",5),t()()()()),i&2&&(l(22),_("ngForOf",o.complaints))},dependencies:[M],encapsulation:2})};function Me(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td")(12,"button",6),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteFeedback(d.id))}),n(13,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.name),l(2),m(i.email),l(2),m(i.rating),l(2),m(i.review)}}var Y=class s{constructor(r){this.feedbackService=r}feedback=[];ngOnInit(){this.loadEmployees()}loadEmployees(){this.feedbackService.getFeedback().subscribe(r=>{this.feedback=r},r=>{console.error("Error loading Feedback:",r)})}deleteFeedback(r){confirm("Are you sure you want to delete")&&this.feedbackService.deleteFeedback(r).subscribe(()=>{this.loadEmployees()},i=>{console.error("Error deleting Feedback:",i)})}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-feedback"]],decls:21,vars:1,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"Feedback"),t(),e(3,"div",2)(4,"table",3)(5,"thead",4)(6,"tr")(7,"th"),n(8,"ID"),t(),e(9,"th"),n(10,"Name"),t(),e(11,"th"),n(12,"Email"),t(),e(13,"th"),n(14,"Rating"),t(),e(15,"th"),n(16,"Review"),t(),e(17,"th"),n(18,"Actions"),t()()(),e(19,"tbody"),S(20,Me,14,5,"tr",5),t()()()()),i&2&&(l(20),_("ngForOf",o.feedback))},dependencies:[M],encapsulation:2})};function we(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td")(6,"button",6),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteNewsletter(d.id))}),n(7,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.myemail)}}var $=class s{constructor(r){this.Newsletterservice=r}newsletter=[];ngOnInit(){this.loadNewsletter()}loadNewsletter(){this.Newsletterservice.getNewsletter().subscribe(r=>{this.newsletter=r},r=>{console.error("Error loading Newsletter:",r)})}deleteNewsletter(r){confirm("Are you sure you want?")&&this.Newsletterservice.deleteNewsletter(r).subscribe(()=>{this.loadNewsletter()},i=>{console.error("Error deleting NewSletter:",i)})}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-newseltter"]],decls:15,vars:1,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"Newsletter Subscribers"),t(),e(3,"div",2)(4,"table",3)(5,"thead",4)(6,"tr")(7,"th"),n(8,"ID"),t(),e(9,"th"),n(10,"Email"),t(),e(11,"th"),n(12,"Actions"),t()()(),e(13,"tbody"),S(14,we,8,2,"tr",5),t()()()()),i&2&&(l(14),_("ngForOf",o.newsletter))},dependencies:[M],encapsulation:2})};var xe=s=>({show:s});function Ie(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td")(16,"button",30),y("click",function(){let d=b(i).$implicit,a=h();return f(a.openReservationModal(d))}),n(17,"Edit"),t(),e(18,"button",31),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteReservation(d.id))}),n(19,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.name),l(2),m(i.email),l(2),m(i.event),l(2),m(i.number),l(2),m(i.date),l(2),m(i.address)}}function ke(s,r){s&1&&I(0,"div",32)}var ee=class s{constructor(r){this.reservationService=r}reservations=[];bookingForm={};currentBooking=null;isModalOpen=!1;ngOnInit(){this.getReservations()}getReservations(){this.reservationService.getReservations().subscribe(r=>{this.reservations=r})}openReservationModal(r){this.currentBooking=r||null,this.bookingForm=r?D({},r):{},this.isModalOpen=!0,this.toggleBodyClass(!0)}closeModal(){this.isModalOpen=!1,this.bookingForm={},this.toggleBodyClass(!1)}saveReservation(){this.currentBooking?this.reservationService.updateReservation(this.bookingForm).subscribe(()=>{this.getReservations(),this.closeModal()}):this.reservationService.addReservation(this.bookingForm).subscribe(()=>{this.getReservations(),this.closeModal()})}deleteReservation(r){this.reservationService.deleteReservation(r).subscribe(()=>{this.getReservations()})}toggleBodyClass(r){r?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-reservations"]],decls:63,vars:15,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"btn","btn-primary","mb-3",3,"click"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],["tabindex","-1","id","reservation",1,"modal","fade",3,"ngClass"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[3,"ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","email",1,"form-label"],["type","email","id","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","Event",1,"form-label"],["type","Event","id","Event","name","event","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","phone",1,"form-label"],["type","text","id","phone","name","phone","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","date",1,"form-label"],["type","date","id","date","name","date","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","address",1,"form-label"],["type","text","id","address","name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"],["class","modal-backdrop fade show",4,"ngIf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"modal-backdrop","fade","show"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"Reservations"),t(),e(3,"button",2),y("click",function(){return o.openReservationModal()}),n(4,"Add Reservation"),t(),e(5,"div",3)(6,"table",4)(7,"thead",5)(8,"tr")(9,"th"),n(10,"ID"),t(),e(11,"th"),n(12,"Name"),t(),e(13,"th"),n(14,"Email"),t(),e(15,"th"),n(16,"Subject"),t(),e(17,"th"),n(18,"Phone"),t(),e(19,"th"),n(20,"Date"),t(),e(21,"th"),n(22,"Address"),t(),e(23,"th"),n(24,"Actions"),t()()(),e(25,"tbody"),S(26,Ie,20,7,"tr",6),t()()(),e(27,"div",7)(28,"div",8)(29,"div",9)(30,"div",10)(31,"h5",11),n(32),t(),e(33,"button",12),y("click",function(){return o.closeModal()}),t()(),e(34,"div",13)(35,"form",14),y("ngSubmit",function(){return o.saveReservation()}),e(36,"div",15)(37,"label",16),n(38,"Name"),t(),e(39,"input",17),g("ngModelChange",function(a){return u(o.bookingForm.name,a)||(o.bookingForm.name=a),a}),t()(),e(40,"div",15)(41,"label",18),n(42,"Email"),t(),e(43,"input",19),g("ngModelChange",function(a){return u(o.bookingForm.email,a)||(o.bookingForm.email=a),a}),t()(),e(44,"div",15)(45,"label",20),n(46,"Email"),t(),e(47,"input",21),g("ngModelChange",function(a){return u(o.bookingForm.event,a)||(o.bookingForm.event=a),a}),t()(),e(48,"div",15)(49,"label",22),n(50,"Phone"),t(),e(51,"input",23),g("ngModelChange",function(a){return u(o.bookingForm.number,a)||(o.bookingForm.number=a),a}),t()(),e(52,"div",15)(53,"label",24),n(54,"Date"),t(),e(55,"input",25),g("ngModelChange",function(a){return u(o.bookingForm.date,a)||(o.bookingForm.date=a),a}),t()(),e(56,"div",15)(57,"label",26),n(58,"Address"),t(),e(59,"input",27),g("ngModelChange",function(a){return u(o.bookingForm.address,a)||(o.bookingForm.address=a),a}),t()(),e(60,"button",28),n(61),t()()()()()(),S(62,ke,1,0,"div",29),t()),i&2&&(l(26),_("ngForOf",o.reservations),l(),pe("display",o.isModalOpen?"block":"none"),_("ngClass",ce(13,xe,o.isModalOpen)),l(5),m(o.currentBooking?"Edit Reservation":"Add Reservation"),l(7),c("ngModel",o.bookingForm.name),l(4),c("ngModel",o.bookingForm.email),l(4),c("ngModel",o.bookingForm.event),l(4),c("ngModel",o.bookingForm.number),l(4),c("ngModel",o.bookingForm.date),l(4),c("ngModel",o.bookingForm.address),l(2),m(o.currentBooking?"Update":"Add"),l(),_("ngIf",o.isModalOpen))},dependencies:[T,F,P,A,U,W,O,N,M,L,ue],styles:[".modal-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;z-index:1050}.modal-open[_ngcontent-%COMP%]{overflow:hidden}.table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:70px;height:50px;padding:6px}.modal-content[_ngcontent-%COMP%]{background:#433d3d;color:#fff}.modal-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:35px}.modal-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#433d3d;color:#fff;padding:15px}.modal-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#fff;fill:#0ff}"]})};function Pe(s,r){if(s&1){let i=E();e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td")(16,"button",6),y("click",function(){let d=b(i).$implicit,a=h();return f(a.deleteContact(d.id))}),n(17,"Delete"),t()()()}if(s&2){let i=r.$implicit;l(2),m(i.id),l(2),m(i.name),l(2),m(i.email),l(2),m(i.subject),l(2),m(i.phone),l(2),m(i.date),l(2),m(i.suggestion)}}var te=class s{constructor(r){this.contactService=r}contact=[];ngOnInit(){this.loadEmployees()}loadEmployees(){this.contactService.getContact().subscribe(r=>{this.contact=r},r=>{console.error("Error loading contacts:",r)})}deleteContact(r){confirm("Are you sure you want to delete this contact?")&&this.contactService.deleteContact(r).subscribe(()=>{this.loadEmployees()},i=>{console.error("Error deleting contact:",i)})}static \u0275fac=function(i){return new(i||s)(C(w))};static \u0275cmp=v({type:s,selectors:[["app-contact"]],decls:25,vars:1,consts:[[1,"container","mt-5"],[1,"mb-4"],[1,"table-responsive"],[1,"table","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"h2",1),n(2,"User Contact"),t(),e(3,"div",2)(4,"table",3)(5,"thead",4)(6,"tr")(7,"th"),n(8,"ID"),t(),e(9,"th"),n(10,"Name"),t(),e(11,"th"),n(12,"Email"),t(),e(13,"th"),n(14,"Subject"),t(),e(15,"th"),n(16,"Phone"),t(),e(17,"th"),n(18,"Date"),t(),e(19,"th"),n(20,"Suggestions"),t(),e(21,"th"),n(22,"Actions"),t()()(),e(23,"tbody"),S(24,Pe,18,7,"tr",5),t()()()()),i&2&&(l(24),_("ngForOf",o.contact))},dependencies:[M],encapsulation:2})};var Ae=[{path:"",redirectTo:"admin-dashboard",pathMatch:"full"},{path:"admin-dashboard",component:Z,canActivate:[x]},{path:"addemployee",component:J,canActivate:[x]},{path:"salarycal",component:K,canActivate:[x]},{path:"userlist",component:Q,canActivate:[x]},{path:"complaint",component:X,canActivate:[x]},{path:"feedback",component:Y,canActivate:[x]},{path:"newsle",component:$,canActivate:[x]},{path:"reservation",component:ee,canActivate:[x]},{path:"contact",component:te,canActivate:[x]},{path:"adminhome",component:j,canActivate:[x]},{path:"adminmenu",component:z,canActivate:[x]},{path:"adminservice",component:H,canActivate:[x]},{path:"adminabout",component:G,canActivate:[x]},{path:"**",redirectTo:"admin-dashboard"}],ve=class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=se({type:s});static \u0275inj=me({imports:[re.forChild(Ae),re]})};export{ve as AdminRoutingModule};
