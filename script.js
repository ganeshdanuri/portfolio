document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("downloadButton");

  const handleDownload = () => {
    console.log("cli");
    // Here, you would fetch your resume file or create it programmatically
    // For demonstration purposes, let's assume we have a sample PDF resume file
    const resumeUrl = "./files/Ganesh_Danuri_Frontend_Dev.pdf";

    // Initiate the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ganesh_Danuri_Frontend_Dev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  downloadButton.addEventListener("click", handleDownload);
});
