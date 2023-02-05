

export default function () {
  return (
    <Dropdown
      text=" "
      options={options}
      value={data.Cleaning}
      onChange={(e, { value }) => {
        if (window.confirm("Are you sure you want to Update?")) {
          handleChange(data.customId, value, "Cleaning");
          switch (value) {
            case -1:
              NotificationManager.info(
                `Updated ${data.ITI_Name}'s Cleaning to Not yet started`,
                "",
                6000,
                {}
              );
              break;
            case 0:
              NotificationManager.warning(
                `Updated ${data.ITI_Name}'s Cleaning to work in Progress`,
                "",
                6000,
                {}
              );
              break;
            case 1:
              NotificationManager.success(
                `${data.ITI_Name}'s Cleaning marked Completed`,
                "",
                6000,
                {}
              );
              break;
            default:
              break;
          }
        }
      }}
    />
  );
}
