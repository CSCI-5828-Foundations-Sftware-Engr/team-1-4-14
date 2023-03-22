<#import "template.ftl" as layout />
<@layout.mainLayout>
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <#list students as student>
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
            </tr>
        </#list>
        </tbody>
    </table>
    <div class="container">
        <div class="row">
            <a href="/student" class="btn btn-secondary float-right" role="button">Add Student</a>
        </div>
    </div>
</@layout.mainLayout>