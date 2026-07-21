const API_ENDPOINT = '/pages/send_mail.php';

export async function submitContactForm(formData) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return {
      success: text.trim().toLowerCase() === 'success',
      message: text.trim(),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'An error occurred while submitting the form.',
    };
  }
}
