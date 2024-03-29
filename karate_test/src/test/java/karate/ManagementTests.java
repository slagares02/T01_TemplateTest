package karate;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Test;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class ManagementTests {

    private static final String DOMAIN = "Registration";
    private static final String PATH_BUILD = "build";
    private static final String CLASSPATH_KARATE = "classpath:karate";
    private static final String TAG_IGNORE = "~@ignore";
    private static final String[] FILES_JSON = new String[]{"json"};

    public static void generateReport(String karateOutputPath) {
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), FILES_JSON , true);
        List<String> jsonPaths = new ArrayList<>(jsonFiles.size());
        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
        Configuration config = new Configuration(new File(PATH_BUILD), DOMAIN);
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
        reportBuilder.generateReports();
    }
    
    @Test
    void runningAllRunner(){
        Results results = Runner.path(CLASSPATH_KARATE)
                .outputCucumberJson(true)
                .tags(TAG_IGNORE)
                .parallel(1);
        generateReport(results.getReportDir());
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}