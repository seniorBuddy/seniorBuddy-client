interface token {
  access_token: string;
  refresh_token: string;
}

export const loginUser = async (identifier: string, password: string): Promise<token> => {

  const data = { identifier, password };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    alert(errorMessage);
  
  }

  const responseData = await res.json();


  return responseData;
};
