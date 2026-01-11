function openWhatsapp() {
    const phoneNumber = "7092840069"; // Replace with the desired phone number
    const message = "Hello PhysiCraft EDU , we are interested in academic collaboration"; // Replace with your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}