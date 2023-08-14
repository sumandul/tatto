import SettingCard from "@/app/components/SettingCard";

import Header from "@/app/partails/Header";

const AllSettings = () => {
  return (
    <>
      <Header headerType={""} />
      <div className="container mx-auto">
        <div className="grid justify-center h-full grid-cols-4 gap-6 m-auto content mt-9 w-11-13">
          {/* this is business Setup Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/settings.png"}
            title={"Business Setup"}
            description={"Business details, locations, and feature management."}
            explore={"allsettings/businesssetup/details"}
          />
          {/* this is Staff Members Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/staff.png"}
            title={"Staff Members"}
            description={
              "Staff details, schedules, permissions, compensation, and more"
            }
            explore={"/allsettings/staffmembers"}
          />
          {/* this is Calendars & Appointments Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/calendar.png"}
            title={"Calendars & Appointments"}
            description={"Calendar preferences and appointment settings"}
            explore={"/allsettings/calendarappointment"}
          />
          {/* this is Services Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/services.png"}
            title={"Services"}
            description={
              "Service categories, duration, pricing and online booking availability"
            }
            explore={"/allsettings/services"}
          />
          {/* this is Automated Messages Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/auto_message.png"}
            title={"Automated Messages"}
            description={
              "Configure and customize automated emails, text messages, and more"
            }
            explore={"/allsettings/automatedmessages/appointmentbooked"}
          />
          {/* this is Form Templates Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/form.png"}
            title={"Form Templates"}
            description={
              "Create custom forms to gather important client information"
            }
            explore={"/allsettings/formtemplatessettings"}
          />
          {/* this is Gift Cards Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/gift.png"}
            title={"Gift Cards"}
            description={
              "Configure online gift cards, design templates, and more"
            }
            explore={"/allsettings/giftcards/onlinesales"}
          />
          {/* this is Payments & Checkout Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/payment.png"}
            title={"Payments & Checkout"}
            description={
              "Payment accounts, point-of-sale, and checkout settings"
            }
            explore={"/allsettings/paymentcheckoutsettings"}
          />
          {/* this is Online Booking Card */}
          <SettingCard
            icon={"/png_icons/all_settings_icons/online_device.png"}
            title={"Online Booking"}
            description={
              "Online booking preferences, website integration, and more"
            }
            explore={"/allsettings/onlinebooking"}
          />
        </div>
      </div>
    </>
  );
};

export default AllSettings;
