export default function emailPreview(candidate, displayName, email) {
    let skillPhrase = '';
    let educationPhrase = '';
    let majorPhrase = '';
    let edumajorPhrase = '';
    let yearsOfXPPhrase = ''; 
  
    if (candidate.skills !== undefined && candidate.skills.length === 1 ) {
      skillPhrase = `One of their skills is${candidate.skills.map(
        skill => ` ${skill}`,
      )}. `;
    } 
    if (candidate.skills !== undefined && candidate.skills.length === 2) {
      skillPhrase = `Their skills include ${candidate.skills[0]} and ${candidate.skills[1]}. `;
    } 
  
    if (candidate.skills !== undefined && candidate.skills.length > 2) {
      let skillsArray = candidate.skills; 
      let skillsArrayExceptLast = skillsArray.splice(0, skillsArray.length-1);
      let skillsArrayLast = skillsArray.pop(); 
      skillPhrase = `Their skills include${skillsArrayExceptLast.map(skill => ` ${skill}`)}, and ${skillsArrayLast}. `;
    } 
    if (candidate.education !== undefined && candidate.education === "Associate's degree") {
        educationPhrase = `They have an ${candidate.education}. `;
      }
    if (candidate.education !== undefined && candidate.education !== "Associate's degree")
      { educationPhrase = `They have a ${candidate.education}. `; }
    
   
    if (candidate.experience !== undefined || null) {
      yearsOfXPPhrase = `The candidate has ${
        candidate.experience
      } years of experience. `;
    } 
  
    if (candidate.education !== undefined && candidate.major !== undefined && candidate.major.length === 1) {
      edumajorPhrase = `The candidate has${candidate.education === "Associate's degree" ? ` an ${candidate.education}` : ` a ${candidate.education}` } with a major in ${candidate.major}. `
    } 
  
    if  (candidate.education !== undefined && candidate.major !== undefined && candidate.major.length > 2) { 
      let majorsArray = candidate.major; 
      let majorArrayExceptLast = majorsArray.splice(0, majorsArray.length-1); 
      let majorArrayLast = majorsArray.pop(); 
  
      edumajorPhrase = `The candidate has${candidate.education === "Associate's degree" ? ` an ${candidate.education}` : ` a ${candidate.education}` } with majors in${majorArrayExceptLast.map(major => ` ${major}`)} and ${majorArrayLast}. `
    }
  
    if (candidate.education !== undefined && candidate.major !== undefined && candidate.major.length === 2) {
      edumajorPhrase = `The candidate has${candidate.education === "Associate's degree" ? ` an ${candidate.education}` : ` a ${candidate.education}` } with majors in ${candidate.major[0]} and ${candidate.major[1]}. `
    }
  
    if (candidate.major !== undefined && candidate.major.length === 1) {
      majorPhrase = `They majored in${candidate.major.map(major => ` ${major}`)}. `;
    }
    if (candidate.major !== undefined && candidate.major.length === 2) {
      majorPhrase = `They majored in ${candidate.major[0]} and ${candidate.major[1]}. `;
    }
  
    if (candidate.major !== undefined && candidate.major.length > 2) { 
      let majorArray = candidate.major; 
      let majorArrayMinusLast = majorArray.splice(0, majorArray.length-1);
      let Lastmajor = majorArray.pop();  
      majorPhrase = `They majored in${majorArrayMinusLast.map(major => ` ${major}`)} and ${Lastmajor}. `
    }
  
  
    let candidateInfo;
  
    if (candidate.education !== undefined && candidate.major !== undefined) {
      candidateInfo = yearsOfXPPhrase + skillPhrase + edumajorPhrase; 
    } else {
      candidateInfo =
    yearsOfXPPhrase + skillPhrase + educationPhrase + majorPhrase; }
  
    const recruiter_name = displayName;
    const recruiter_email = email;
    
    if (candidate.name && candidate.email && recruiter_name || recruiter_email)
     {return `Hello,  ${
      candidate.name
    } would be a great fit for your needs. You can contact the candidate by email at ${
      candidate.email
    }.  ${candidateInfo} Feel free to reach out to me with any questions. Thank you, ${recruiter_name}  ${recruiter_email}` }
    else  {
        return  "  "
    }
  }