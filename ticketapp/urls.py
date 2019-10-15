
from django.urls import path
from .views import *


urlpatterns = [
    path('', Homepage.as_view(), name="homepage"),
    path('multiple_event',MultipleEnvent.as_view(), name='multiple_event'),
    path('event_details',EventDetails.as_view(), name='event_details'),
    path('aboutus',Aboutus.as_view(), name='aboutus'),
    path('whyus',Whyus.as_view(), name='whyus'),
    path('faq',NavBar.as_view(), name='faq'),
    path('contactus',ContactUs.as_view(), name='contactus'),
    path('terms',Terms.as_view(), name='terms'),
    path('privacy',Privacy.as_view(), name='privacy'),
    path('blog',Blog.as_view(), name='blog'),
    path('single_blog',SingleBlog.as_view(), name='single_blog'),
    path('registration',Registration.as_view(), name='registration'),
    path('login',Login.as_view(), name='login'),
    path('logout',LogoutView.as_view(), name='logout'),
    path('forget_password',ForgetPass.as_view(), name='forget_password'),
    path('confirm_email/<str:code>',ConfirmEmail.as_view(), name='confirm_email'),
    path('reset_password/<str:code>',ResetPassword.as_view(), name='reset_password'),
    path('myaccount_info',AccountInfo.as_view(), name='myaccount_info'),
    path('tickets_sale',TicketsSale.as_view(), name='tickets_sell'),
    path('tickets_manage',TicketsManage.as_view(), name='tickets_manage'),
    path('tickets_order',TicketsOrder.as_view(), name='tickets_order'),
    path('order_history',OrderHistory.as_view(), name='order_history'),
    path('mycart',MyCart.as_view(), name='mycart'),
    path('myorder',MyOrder.as_view(), name='myorder'),
    path('myorderpns',MyOrderPNS.as_view(), name='myorderpns'),

    # admin panel

    path('adminhome',AdminHome.as_view(), name='adminhome'),
    path('super-admin',SuperAdmin.as_view(), name='super-admin'),
    path('add-staff',AddStaff.as_view(), name='add-staff'),
    path('add-tickets-staff',AddTicketsStaff.as_view(), name='add-tickets-staff'),
    path('tickets-users',TicketsUsers.as_view(), name='tickets-users'),
    path('manage-user',ManageUser.as_view(), name='manage-user'),
    path('admin-login',AdminLogin.as_view(), name='admin-login'),
    path('admin-logout',AdminLogout.as_view(), name='admin-logout'),
    path('add-pages',TicketsAddPages.as_view(), name='add-pages'),
    path('add-role',AddRole.as_view(), name='add-role'),
    path('manage-role',ListOfRole.as_view(), name='manage-role'),

]
