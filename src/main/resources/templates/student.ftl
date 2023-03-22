<#import "template.ftl" as layout />
<@layout.mainLayout title="Home page">
    <form action="/home" method="post">
        <div class="form-group">
            <label for="name">Student Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Name" value="${(student.name)!}">
        </div>
        <div class="form-group">
            <label for="email">Student Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter Email" value="${(student.email)!}">
        </div>
        <button type="submit" formmethod="post" formaction="/student" class="btn btn-primary">Submit</button>
    </form>
</@layout.mainLayout>