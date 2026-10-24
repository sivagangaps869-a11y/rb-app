import axiosService from "../api/axiosService"


// saveResumeAPI - called by component userInput when finish button clicked
export const saveResumeAPI=async(resumeDetails)=>{
    return await axiosService( 'POST','/resumes',resumeDetails)
}

// viewResumeAPI - called by view  components when resume added
export const viewResumeAPI=async(resumeId)=>{
    return await axiosService('GET', `/resumes/${resumeId}`,{})
}

//getALLResumesAPI - called by allResumes component when resume added
export const getALLResumesAPI=async()=>{
    return await axiosService('GET', `/resumes/`,{})
}

// deleteResumeAPI - called by allResumes component when delete button clicked
export const deleteResumeAPI=async(resumeId)=>{
    return await axiosService('DELETE',`/resumes/${resumeId}`,{})
}

// downloadResumeAPI - called by allResumes component when download button clicked
export const downloadResumeAPI=async(resumeDetails)=>{
    return await axiosService('POST','/downloads',resumeDetails)
}

// getAlldownloadResumeAPI - called by component all  downloads component when component loading
export const getAlldownloadResumesAPI=async()=>{
    return await axiosService('GET','/downloads',{})
}

//updateResumeAPI - called by component edit when update button clicked
export const updateResumeAPI=async(resumeId,resumeDetails)=>{
    return await axiosService('PUT',`/resumes/${resumeId}`,resumeDetails)
}