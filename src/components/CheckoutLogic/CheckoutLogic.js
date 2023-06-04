import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const handleCheckout = async (selectedAddress, totalPrice) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Razorpay SDK failed to load, please check your connection.");
    return;
  }

  const razorpayOption = {
    key: import.meta.env.VITE_APP_RAZORPAY_API_KEY,
    amount: totalPrice * 100,
    currency: "INR",
    name: "CLOTHIFY",
    description:
      "Unlock the power of style and elevate your wardrobe with clothify",
    image:
      "https://scontent.fdel7-1.fna.fbcdn.net/v/t39.30808-6/311603128_210093544709043_8572712917983816564_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qqhOEDibzXMAX9zIJZ8&_nc_ht=scontent.fdel7-1.fna&oh=00_AfDIz-GUgIkXFFKYv_B7Yv4kGMS1eHExhTOCmnGaH1XJDw&oe=6481BD9F",

    handler: function (response) {
      toast.success("Payment successful!", response);
    },

    prefill: {
      name: selectedAddress.name,
      contact: selectedAddress.phoneNumber,
      address: selectedAddress.address,
    },
    notes: {
      address: selectedAddress.address,
    },
    theme: {
      color: "#121932",
      background: "#FFFFFF",
      display_name: "ATTIREX",
    },
    modal: {
      escape: false,
      backdrop_close: true,
      handle_back: true,
    },
  };
  const razorpayInstance = new window.Razorpay(razorpayOption);
  razorpayInstance.open();
};

export { handleCheckout };
