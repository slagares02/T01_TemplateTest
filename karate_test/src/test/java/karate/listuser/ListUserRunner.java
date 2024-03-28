package karate.listuser;

import com.intuit.karate.junit5.Karate;

public class ListUserRunner {

    private static final String PROJECT = "list_user";

    @Karate.Test
    Karate ListUserRunner() {return Karate.run(PROJECT).relativeTo(getClass());}
}
