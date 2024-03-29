package karate.usernotfound;

import com.intuit.karate.junit5.Karate;

public class UserNotFoundRunner {

    private static final String PROJECT = "user_not_found";

    @Karate.Test
    Karate UserNotFoundRunner() {return Karate.run(PROJECT).relativeTo(getClass());}
}
