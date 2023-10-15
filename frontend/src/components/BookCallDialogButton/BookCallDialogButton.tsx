"use client";

import { CalendarPlus, Hourglass, MailCheck, X, XCircle } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Roboto_Mono } from "next/font/google";
import "react-day-picker/dist/style.css";
import { ChangeEvent, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const BookCallDialogButton = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    contactInfo: "",
    message: "",
    contactDate: new Date(),
  });

  const handleContactInfoChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, contactInfo: e.target.value });

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setFormData({ ...formData, message: e.target.value });

  useEffect(() => {
    if (selected instanceof Date)
      setFormData({ ...formData, contactDate: selected });
  }, [selected]);

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post("/api/form", formData)
      .then(() => {
        toast.custom(
          (t) => (
            <div className="flex items-center gap-4 p-4 font-bold border-2 font-roboto border-cyan bg-blackDimmed text-cyan text-contentSmall">
              <MailCheck strokeWidth={1.5} />
              Thank you! I will get back to you soon!
            </div>
          ),
          { duration: 6000 }
        );
      })
      .catch((err) => {
        console.log("form submit error", err);
        toast.custom(
          (t) => (
            <div className="flex items-center gap-4 p-4 font-bold border-2 font-roboto border-cyan bg-blackDimmed text-cyan text-contentSmall">
              <XCircle strokeWidth={1.5} /> Oops! Something went wrong...
            </div>
          ),
          { duration: 5000 }
        );
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
      });
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
        <Dialog.Trigger onClick={() => setOpen(true)}>
          <span className="flex items-center  whitespace-nowrap justify-center gap-[0.625rem] sm:gap-5 transition-colors ease-in-out px-buttonXSmall md:px-buttonXMedium lg:px-buttonXLarge py-buttonYSmall md:py-buttonYMedium lg:py-buttonYLarge text-contentSmall md:text-contentMedium lg:text-contentLarge bg-cyan hover:bg-cyanLight text-blackDimmed font-bold ">
            <CalendarPlus strokeWidth={1.5} width={24} height={24} />
            Book a call
          </span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="backdrop-blur-sm	z-40 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] z-50 left-[50%]  w-fit translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-blackDimmed p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-whiteDimmed">
            <Dialog.Title className="font-bold font-roboto text-titleSmall">
              Book a call
            </Dialog.Title>
            <Dialog.Description className="leading-normal text-leadingSmall w-72">
              Please leave your phone number or email, and I will get back to
              you.
            </Dialog.Description>
            <div className="flex flex-col items-start justify-center gap-2 my-5">
              <form onSubmit={handleSubmit}>
                <fieldset className="flex items-center justify-center gap-5 w-72">
                  <label
                    className="w-20 text-right text-contentSmall"
                    htmlFor="contactInfo"
                  >
                    phone/email
                  </label>
                  <input
                    required
                    onChange={handleContactInfoChange}
                    className=" inline-flex h-5 p-4 w-full flex-1 items-center justify-center text-contentSmall leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] text-blackDimmed"
                    id="contactInfo"
                  />
                </fieldset>
                <fieldset className="flex items-center justify-center gap-5 w-72">
                  <label
                    className="w-20 text-right text-contentSmall"
                    htmlFor="message"
                  >
                    message
                  </label>
                  <textarea
                    required
                    onChange={handleMessageChange}
                    className=" inline-flex h-10 p-4 w-full flex-1 items-center justify-center text-contentSmall leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] text-blackDimmed"
                    id="message"
                  />
                </fieldset>
                <div className="w-72 h-72">
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    className="text-whiteDimmed"
                  />
                </div>
                <div className="flex justify-end">
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-contentSmall w-36 ${robotoMono.className}`}
                    >
                      I will contact you at {selected?.toDateString()}
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center font-bold bg-cyan hover:bg-cyanLight px-buttonXSmall py-buttonYSmall font-roboto text-blackDimmed"
                    >
                      {!loading ? (
                        "Confirm"
                      ) : (
                        <div className="flex items-center gap-2">
                          Loading
                          <Hourglass
                            strokeWidth={1.5}
                            width={16}
                            height={16}
                            className="animate-spin "
                          />
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-whiteDimmed"
                aria-label="Close"
              >
                <X strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default BookCallDialogButton;
