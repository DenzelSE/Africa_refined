import emailjs from "@emailjs/browser"

// Initialize EmailJS with your public key
export const initEmailJS = () => {
    // const Pkey = process.env.PUBLIC_KEY as string; 
    // console.log('public key: ',Pkey)
  emailjs.init("BadZ2OkPXYtF4dydz")
}

// Contact form email
export const sendContactEmail = async (formData: any) => {
//   const service_id = process.env.SERVICE_ID as string;
//   const temp_id = process.env.CONTACT_TEMPLATE_ID as string;
//   console.log("service ID: ", service_id)
//   console.log("temp_ID: ",temp_id)

    try {
    const result = await emailjs.send(
        "service_mmxu68g", 
      "contact_form",

      {
        name: formData.name || formData.firstName + " " + formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    )

    return { success: true, result }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: false, error }
  }
}
