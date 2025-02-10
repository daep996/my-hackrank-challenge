package challenge4;

public class TimeConversion {
    public static String timeConversion(String s) {
        // Write your code here
        boolean isAM = s.endsWith("AM");
        if (isAM) {
            if (s.startsWith("12")) {
                return "00" + s.substring(2, 8);
            } else {
                return s.substring(0, 8);
            }
        }
        String strHour = s.substring(0, 2);
        String strRest = s.substring(2, 8);
        int hour = Integer.parseInt(strHour);
        hour = hour == 12 ? 12 : hour + 12;
        strHour = String.format("%02d", hour);
        return strHour + strRest;
    }

    public static void main(String[] args) {
        System.out.println(timeConversion("07:05:45AM")); // 07:05:45
        System.out.println(timeConversion("12:00:00AM")); // 00:00:00
        System.out.println(timeConversion("12:00:01AM")); // 00:00:01

        System.out.println(timeConversion("12:00:00PM")); // 12:00:00
        System.out.println(timeConversion("12:45:54PM")); // 12:45:54
        System.out.println(timeConversion("07:05:45PM")); // 19:05:45
    }
}
