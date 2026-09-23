const BASE_URL = ('http://localhost:3001'|| 'https://election.digicoders.in').replace(/\/+$/, '');

export const submitWebsiteInquiry = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/public/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || '',
        role: formData.role || '',
        constituency: formData.constituency || '',
        state: formData.state || '',
        message: formData.message || '',
        source: formData.source || 'website',
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to submit website inquiry to backend API:', error);
    return null;
  }
};
