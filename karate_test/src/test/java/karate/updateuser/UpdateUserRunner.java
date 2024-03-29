package karate.updateuser;

import com.intuit.karate.junit5.Karate;

public class UpdateUserRunner {

    private static final String PROJECT = "update_user";

    @Karate.Test
    Karate UpdateUserRunner() {return Karate.run(PROJECT).relativeTo(getClass());}
}
