const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      user: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      register: (data) => {
        const store = getStore();
        fetch(`${process.env.BACKEND_URL}/api/register`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.status === 409)
              throw new Error(
                "The email address already exists. Please login to your account to continue."
              );
            return res.json();
          })
          .then((data) => {
            console.log("data ", data);
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });
            return true;
          })
          .catch((err) => err);
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStore.getItem("token");
        console.log(
          "Application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
    },
  };
};

export default getState;
