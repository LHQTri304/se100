import localhost from "./localhost";

export const lopHocGET = async () => {
  return await fetch(`${localhost}/lop-hoc`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });
};

export const lopHocPOST = async () => {
  var form = new FormData();
  form.append("nameGroup", "hahaha");
  form.append("passWord", "123");

  console.log(form)

  return await fetch(`${localhost}/lop-hoc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: form,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
