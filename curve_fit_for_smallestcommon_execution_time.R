x <- c(10, 100, 1000, 3000,  5000, 7000, 10000, 11000);
y <- c(0.2, 0.82, 39.6, 349, 737, 1254, 2047, 2471);

x <- c(1, 2, 3, 4, 5)
y <- c(1, 8, 27, 64, 125)

plot(x, y, pch = 19)
#fit first degree polynomial equation:
fit_ln  <- lm(y~x)
#second degree
fit2 <- lm(y~poly(x,2,raw=TRUE))
#third degree
fit3 <- lm(y~poly(x,3,raw=TRUE))
#fourth degree
fit4 <- lm(y~poly(x,4,raw=TRUE))
#exponential
fit_exp <- lm(log(y)~ x)
#generate range of 50 numbers starting from 30 and ending at 160
xx <- seq(1, 15000)
plot(x,y,pch=19,ylim=c(0,2500))
lines(xx, predict(fit, data.frame(x=xx)), col="red")
lines(xx, predict(fit2, data.frame(x=xx)), col="green")
lines(xx, predict(fit3, data.frame(x=xx)), col="blue")
lines(xx, predict(fit_exp, data.frame(x=xx)), col="purple")

summary(fit2)
summary(fit3)
