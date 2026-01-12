function openWhatsapp() {
    const phoneNumber = "7092840069"; 
    const message = "Hello PhysiCraft EDU , we are interested in academic collaboration.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}