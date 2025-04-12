package assertion;
import org.testng.asserts.IAssert;
import org.testng.asserts.SoftAssert;

import base.BaseTest;

public class MySoftAssert extends SoftAssert {

    @Override
    public void onAssertFailure(IAssert<?> a, AssertionError ex) {

    }
    

}
