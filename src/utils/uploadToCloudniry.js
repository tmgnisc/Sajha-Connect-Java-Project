const cloud_name="dmjfctlgr";
const upload_preset="nhhvi9rk";
export const uploadToCloudniry=async(pics, fileType)=>{

    if(pics && fileType){
const data = new FormData()
data.append("file", pics)
data.append("upload_preset", upload_preset)
data.append("cloud_name", cloud_name)
cloud res = await fetch(`POST https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`)
    }
    else{
        console.log("error........ayo")
    }

}