import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  public googleSkills:any = ["Java", "Python", "Go", "Google Cloud(GCP)","Boq","Kubernetes", "PLX-Script", "Protobuf", "gRPC","pub/sub"];
  public microsoftSkills:any = ["C#","Python","Azure Cloud","Machine Learning", "PowerShell","PowerBI","Rest APIs","Unix","SQL Server"];
  public geHealthcareSkills:any = ["Spring MVC", "JAVA (JDK 8)", "Spring Boot","Angular","Maven", "Docker","Kubernetes", "Jira","Rest APIs","Web Services","Spring MVC","MS SQL Server","MS Studio","Unix","Shell Script","HL7 Standard","IntelliJ","Confluence"];
  public cmeSkills:any = ["Spring MVC", "JAVA (JDK 8)", "Spring Boot",  "Bamboo","Splunk","Rest APIs","Web Services","JSP","Spring MVC","Unix","Shell Script"];
  public attSkills:any = ["Java" , "ReactJs",  "J2EE", "Angular", "Oracle" , "Pl-Sql", "Rest APIs", "PL-SQL", "Web Services", "JSP", "Windows"];
  public bibaSkills:any = ["Java", "J2EE", "ReactJS", "TypeScript", "AngularJS", "Spring MVC", "Rest APIs", "CSS", "Git", "PL/ Sql", "MySQL", "Oracle", "XML", "HTML5", "Git", "Apache", , "Apache Tomcat", "Hibernate", "AWS"];
  public aricentSkills:any = ["C/C++", "Multithreading", "Linux/UNIX", "Network", "Linux Kernel", "Windows", "Shell-Script", "PL/Sql", "Oracle", "MySQL", "GIT"];
}
