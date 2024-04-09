const cloud_name="dmjfctlgr";
const upload_preset="nischal_java_project"
export const uploadToCloudniry=async(pics, fileType)=>{

    if(pics && fileType){
const data = new FormData()
data.append("file", pics)
data.append("upload_preset", upload_preset)
data.append("cloud_name", cloud_name)
const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
{method:"post", body:data})
console.log("res", res)
const fileData = await res.json();

console.log("res", fileData.url)
return fileData.url
    }
    else{
        console.log("error........ayo")
    }

}
export default uploadToCloudniry